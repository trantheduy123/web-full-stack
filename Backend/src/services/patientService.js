import db from "../models";
require("dotenv").config();
import _ from "lodash";

const postBookAppointment = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.email || !data.timeType || !data.doctorId || !data.date) {
        resolve({
          errCode: 1,
          errMessage:
            "Missing parameter(s). Please provide email, timeType, doctorId, and date.",
        });
        return;
      }

      // Upsert user
      const user = await db.User.findOrCreate({
        where: { email: data.email },
        defaults: {
          email: data.email,
          roleId: "R3",
        },
      });

      console.log(">>>>>>>> duy check", user[0]);

      if (user && user[0]) {
        await db.Booking.findOrCreate({
          where: { patientID: user[0].id },
          defaults: {
            statusId: "S1",
            doctorId: data.doctorId,
            patientID: user[0].id,
            date: data.date,
            timeType: data.timeType,
          },
        });
        resolve({
          errCode: 0,
          errMessage: " create user sucessed.",
        });
        return;
      }
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  postBookAppointment: postBookAppointment,
};
