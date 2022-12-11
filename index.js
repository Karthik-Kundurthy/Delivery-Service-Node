const express = require("express");
const {
  addEmployee,
  getAllEmployees,
  getEmployee,
  updateAddress,
  deleteEmployee,
  getAllDepartments,
  getAllIngredients,
  deleteIngredient,
  addDrone
} = require("./utils/queryHelpers");
const app = express();
const cors = require("cors");

const genericError = "Sorry, something went wrong!";

app.use(express.json());

const whitelist = ["http://localhost:3001"]; //Change to the port in which react app is running
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));

// app.get("/departments", async function (request, response) {
//   try {
//     const [result] = await getAllDepartments();
//     response.send({ success: true, result });
//   } catch (error) {
//     response.status(500).send({
//       success: false,
//       error: genericError,
//     });
//   }
// });

app.get("/", async function (request, response) {
  try {
    const [result] = await getAllIngredients();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// app.get("/:id", async function (request, response) {
//   const { id } = request.params;
//   try {
//     const [result] = await getEmployee(id);
//     if (result.length > 0) {
//       response.send({ success: true, result: result[0] });
//     } else {
//       response.status(404).send({
//         success: false,
//         error: `No employee found with id ${id}`,
//       });
//     }
//   } catch (error) {
//     response.status(500).send({
//       success: false,
//       error: genericError,
//     });
//   }
// });

app.put("/", async function (request, response) {
  try {
    const { id, tag, barcode, packages, price } = request.body;
    const [result] = await addDrone(id, tag, barcode, packages, price);
    console.log(result)
    if (result.insertId) {
      const [data] = await getAllIngredients(result.insertId);
      response.send({ success: true, result: data[0] });
    } else {
      response.status(500).send({
        success: false,
        error: genericError,
      });
    }
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// app.put("/:id", async function (request, response) {
//   try {
//     const { address } = request.body;
//     const { id } = request.params;
//     const [result] = await updateAddress(id, address);
//     if (result.affectedRows > 0) {
//       const [data] = await getEmployee(id);
//       response.send({ success: true, result: data[0] });
//     } else {
//       response.status(400).send({
//         success: false,
//         error: genericError,
//       });
//     }
//   } catch (error) {
//     console.log(error);
//     response.status(500).send({
//       success: false,
//       error: genericError,
//     });
//   }
// });

app.delete("/:id", async function (request, response) {
  try {
    const { barcode } = request.params;
    const [result] = await deleteIngredient(barcode);
    if (result.affectedRows > 0) {
      response.send({ success: true });
    } else {
      response.status(400).send({
        success: false,
        error: "0 rows affected",
      });
    }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.listen(3000);