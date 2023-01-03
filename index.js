const express = require("express");
const {
  // addEmployee,
  getAllEmployees,
  getEmployee,
  updateAddress,
  deleteEmployee,
  getAllDepartments,
  getAllIngredients,
  addPilot,
  deleteIngredient,
  loadDrone,
  addOwner,
  addEmployee,
  hireEmployee,
  getAllServices,
  getAllOwners,
  addDeliveryService,
  manageService,
  getAllPilots,
  getAllLocations,
  removePilot,
  addRestaurant,
  addWorker,
  getAllWorkers,
  removeIngredient,
  getAllDrones,
  addStartFunding,
  removeDrone,
  addLocation,
  addIngredient,
  addHireEmployee,
  addPurchaseIngredient,
  addTakeoverDrone,
  addRefuelDrone,
  addFireEmployee,
  addJoinSwarm,
  addLeaveSwarm,
  addFlyDrone,
  addDrone
} = require("./utils/queryHelpers");
const app = express();
const cors = require("cors");

const genericError = "Sorry, something went wrong!";

app.use(express.json());
// app.use(express.urlencoded());

// const whitelist = ["http://localhost:3001"]; //Change to the port in which react app is running
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (!origin || whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true,
// };
// app.use(cors(corsOptions));

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
app.use(cors());


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

app.get("/services", async function (request, response) {
  try {
    const [result] = await getAllServices();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.get("/services/owners", async function (request, response) {
  try {
    const [result] = await getAllOwners();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.get("/services/owners/employees", async function (request, response) {
  try {
    const [result] = await getAllEmployees();
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

app.get("/services/owners/employees/pilots", async function (request, response) {
  try {
    const [result] = await getAllPilots();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.get("/services/owners/employees/pilots/locations", async function (request, response) {
  try {
    const [result] = await getAllLocations();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.get("/services/owners/employees/pilots/locations/workers", async function (request, response) {
  try {
    const [result] = await getAllWorkers();
    response.send({ success: true, result });
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.get("/services/owners/employees/pilots/locations/workers/drones", async function (request, response) {
  try {
    const [result] = await getAllDrones();
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
``



//load drone
app.post("/", async function (request, response) {
  try {
    const { drone_id, tag, barcode, packages, price } = request.body;
    const [result] = await loadDrone(drone_id, tag, barcode, packages, price);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//add ingredient
app.put("/", async function (request, response) {
  try {
    const {ingredient_barcode,
      ingredient_iname,
      ingredient_weight} = request.body.data;
    const [result] = await addIngredient(ingredient_barcode,
      ingredient_iname,
      ingredient_weight);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//add HireEmployee
app.put("/services/owners/employees/pilots/locations/hireEmployee", async function (request, response) {
  try {
    console.log("Hello there!" + request);
    console.log("Please work: " + request.body.data)
    const {hire_employee_username,
      hire_employee_id} = request.body.data;
    console.log(hire_employee_username, hire_employee_id)

    const [result] = await addHireEmployee('lrodriguez5',
      'hf');
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


// add drone
// app.put("/", async function (request, response) {
//   try {
//     const {load_drone_id, load_drone_tag, load_drone_barcode, load_drone_more_packages, load_drone_price } = request.body;
//     const [result] = await loadDrone(load_drone_id,
//       load_drone_tag,
//       load_drone_barcode,
//       load_drone_more_packages,
//       load_drone_price);
//     console.log(result)
//     // if (result.insertId) {
//     // const [data] = await getAllIngredients(result.insertId);
//     // response.send({ success: true, result: data[0]});
//     // } else {
//     //   response.status(500).send({
//     //     success: false,
//     //     error: genericError,
//     //   });
//     // }
//   } catch (error) {
//     console.log(error)
//     response.status(500).send({
//       success: false,
//       error: genericError,
//     });
//   }
// });


// add worker
app.post("/services/owners/employees/pilots/locations/workers", async function (request, response) {
  try {
    console.log("request.body.data" + request.body.data)
    const {worker_username } = request.body.data;
    const [result] = await addWorker(worker_username);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//add delivery service
app.post("/services", async function (request, response) {
  try {
    const { service_id, service_name, service_home_base, service_manager } = request.body;
    const [result] = await addDeliveryService(service_id, service_name, service_home_base, service_manager);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


//manage service
app.put("/service", async function (request, response) {
  try {
    const {manage_service_username, manage_service_ID} = request.body;
    const [result] = await manageService(manage_service_username, manage_service_ID);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});



//add owner
app.post("/services/owners", async function (request, response) {
  try {
    const { owner_username, owner_fname, owner_lname, owner_address, owner_bdate } = request.body;
    const [result] = await addOwner(owner_username, owner_fname, owner_lname, owner_address, owner_bdate);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//add pilot
app.post("/services/owners/employees/pilots", async function (request, response) {
  try {
    const { pilot_username, pilot_licenseID, pilot_experience} = request.body;
    const [result] = await addPilot( pilot_username, pilot_licenseID, pilot_experience);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//add employee
app.post("/services/owners/employees", async function (request, response) {
  try {
    console.log(request.body.data)

    const {employee_username, employee_fname, employee_lname, employee_address, employee_bdate, employee_taxID, employee_hired, employee_experience, employee_salary} = request.body.data;
    console.log(employee_username);
    const [result] = await addEmployee(employee_username, employee_fname, employee_lname, employee_address, employee_bdate, employee_taxID, employee_hired, parseInt(employee_experience), parseInt(employee_salary));


    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


// add restaurant
app.post("/services/owners/employees/pilots/locations", async function (request, response) {
  try {
    console.log(request.body.data)

    const {rest_name,
      rest_rating,
      rest_spent,
      rest_location} = request.body.data;

    console.log(rest_name);

    const [result] = await addRestaurant(rest_name,
      rest_rating,
      rest_spent,
      rest_location);


    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.put("/:id", async function (request, response) {
  try {
    const { address } = request.body;
    const { id } = request.params;
    const [result] = await updateAddress(id, address);
    if (result.affectedRows > 0) {
      const [data] = await getEmployee(id);
      response.send({ success: true, result: data[0] });
    } else {
      response.status(400).send({
        success: false,
        error: genericError,
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


app.delete("/", async function (request, response) {
  try {
    console.log(request)
    console.log(request.body)
    const { remove_ing_barcode } = request.body;

    const [result] = await removeIngredient(remove_ing_barcode);
    console.log(result)
    // if (result.affectedRows > 0) {
    //   response.send({ success: true });
    // } else {
    //   response.status(400).send({
    //     success: false,
    //     error: "0 rows affected",
    //   });
    // }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


app.delete("/services/owners/employees/pilots/locations/workers/drones", async function (request, response) {
  try {
    console.log(request)
    console.log(request.body)
    const { remove_drone_id, remove_drone_tag } = request.body;

    const [result] = await removeDrone(remove_drone_id, parseInt(remove_drone_tag));
    console.log(result)
    // if (result.affectedRows > 0) {
    //   response.send({ success: true });
    // } else {
    //   response.status(400).send({
    //     success: false,
    //     error: "0 rows affected",
    //   });
    // }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


app.delete("/services/owners/employees/pilots", async function (request, response) {
  try {
    console.log(request)
    console.log(request.body)
    const { remove_pilot_username } = request.body;

    const [result] = await removePilot(remove_pilot_username);
    console.log(result)
    // if (result.affectedRows > 0) {
    //   response.send({ success: true });
    // } else {
    //   response.status(400).send({
    //     success: false,
    //     error: "0 rows affected",
    //   });
    // }
  } catch (error) {
    console.log(error);
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});



// add location
app.post("/services/owners/employees/pilots/locations/res", async function (request, response) {
  try {
    console.log(request.body.data)
    const {location_label, location_x, location_y, location_space} = request.body.data;
    console.log(location_label);
    const [result] = await addLocation(location_label, location_x, location_y, location_space);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// purchase ingredient
app.put("/services/owners/employees/pilots/locations/res/sf/purchaseIngredient", async function (request, response) {
  try {
    console.log(request.body.data)
    const {purchase_ing_long_name,
      purchase_ing_id,
      purchase_ing_tag,
      purchase_ing_barcode,
      purchase_ing_quantity} = request.body.data;
    console.log(purchase_ing_long_name);
    const [result] = await addPurchaseIngredient(purchase_ing_long_name,
      purchase_ing_id,
      purchase_ing_tag,
      purchase_ing_barcode,
      purchase_ing_quantity);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// takeover drone
app.put("/services/owners/employees/pilots/locations/res/sf/purchaseIngredient/td", async function (request, response) {
  try {
    console.log(request.body.data)
    const {takeover_drone_username,
      takeover_drone_ID,
      takeover_drone_tag} = request.body.data;
    // console.log(purchase_ing_long_name);
    const [result] = await addTakeoverDrone(takeover_drone_username,
      takeover_drone_ID,
      takeover_drone_tag);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// refuel drone
app.put("/services/owners/employees/pilots/locations/res/sf/purchaseIngredient/td/rd", async function (request, response) {
  try {
    console.log(request.body.data)
    const {refuel_drone_id,
      refuel_drone_tag,
      refuel_drone_more_fuel } = request.body.data;
    const [result] = await addRefuelDrone(refuel_drone_id,
      refuel_drone_tag,
      refuel_drone_more_fuel);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

//fire employee
app.delete("/services/owners/employees/pilots/locations/res/sf/purchaseIngredient/td/rd/fe", async function (request, response) {
  try {
    console.log(request.body);
    const {fire_employee_username,
      fire_employee_id} = request.body;

    const [result] = await addFireEmployee(fire_employee_username,
      fire_employee_id);
    // console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0]});
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// start_funding
app.put("/services/owners/employees/pilots/locations/res/sf", async function (request, response) {
  try {
    console.log(request.body.data)
    const {start_funding_owner,
      start_funding_long_name} = request.body.data;
    // console.log(location_label);
    const [result] = await addStartFunding(start_funding_owner,
      start_funding_long_name);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// join swarm
app.put("/services/owners/employees/pilots/locations/res/sf/purchaseIngredient/td/js", async function (request, response) {
  try {
    console.log(request.body)
    const {join_swarm_id,
      join_swarm_tag,
      join_swarm_leader_tag} = request.body.data;
    // console.log(location_label);
    const [result] = await addJoinSwarm(join_swarm_id,
      join_swarm_tag,
      join_swarm_leader_tag);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// leave swarm
app.put("/services/owners/employees/pilots/locations/res/sf/purchaseIngredient/td/js/ls", async function (request, response) {
  try {
    console.log(request.body)
    const {leave_swarm_id,
      leave_swarm_tag} = request.body.data;
    //console.log(purchase_ing_long_name);
    const [result] = await addLeaveSwarm(leave_swarm_id,
      leave_swarm_tag);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

// fly drone
app.put("/services/owners/employees/pilots/locations/res/sf/purchaseIngredient/td/js/ls/fd", async function (request, response) {
  try {
    console.log(request.body)
    const {fly_drone_id,
      fly_drone_tag,
      fly_drone_destination} = request.body.data;
    //console.log(purchase_ing_long_name);
    const [result] = await addFlyDrone(fly_drone_id,
      fly_drone_tag,
      fly_drone_destination);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});

app.post("/services/owners/employees/pilots/locations/res/sf/purchaseIngredient/td/js/ls/fd/addDrone", async function (request, response) {
  try {
    console.log(request.body)
    const {load_drone_id,
      load_drone_tag,
      load_drone_fuel,
      load_drone_capacity,
      load_drone_sales,
      load_drone_flown_by} = request.body.data;
    console.log("data: " + request.body.data);
    const [result] = await addDrone(load_drone_id,
      load_drone_tag,
      load_drone_fuel,
      load_drone_capacity,
      load_drone_sales,
      load_drone_flown_by);
    console.log(result)
    // if (result.insertId) {
    // const [data] = await getAllIngredients(result.insertId);
    // response.send({ success: true, result: data[0] });
    // } else {
    //   response.status(500).send({
    //     success: false,
    //     error: genericError,
    //   });
    // }
  } catch (error) {
    console.log(error)
    response.status(500).send({
      success: false,
      error: genericError,
    });
  }
});


app.listen(3000);

// app.delete("/", async function (request, response) {
//   try {
//     const { barcode } = request.params;
//     const [result] = await deleteIngredient(barcode);
//     if (result.affectedRows > 0) {
//       response.send({ success: true });
//     } else {
//       response.status(400).send({
//         success: false,
//         error: "0 rows affected",
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
