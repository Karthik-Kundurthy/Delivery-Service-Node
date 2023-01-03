const getConnection = require("./db");

// const addEmployee = async (username, licenseID, pilot_experience) => {
//   const connection = await getConnection();
//   return connection.execute(
//     "INSERT INTO EMPLOYEE (name,department,address) values (?,?,?)",
//     [name, department, address]
//   );
// //   const add_pilot_role = `
// // create procedure add_pilot_role (in ip_username varchar(40), in ip_licenseID varchar(40),
// // 	in ip_pilot_experience integer)
// // sp_main: begin
// // 	if (ip_licenseID is NULL or ip_pilot_experience is NULL)
// // 		then leave sp_main; end if;

// //     if (select count(*) from employees where username = ip_username) < 1
// // 		then leave sp_main; end if;

// // 	if (select count(*) from pilots where username = ip_username) > 0
// // 		then leave sp_main; end if;
// //     if (select count(*) from pilots where licenseID = ip_licenseID) > 0
// // 		then leave sp_main; end if;

// // 	insert into pilots values (ip_username, ip_licenseID, ip_pilot_experience);`;

// // connection.query(add_pilot_role, (error, results, fields) => {
// //   if (error) {
// //     throw error;
// //   }
// //   console.log('Stored Procedure created successfully');
// // })
// //   return connection.execute('CALL add_pilot_role(?, ?, ?)', [username, licenseID, pilot_experience], (error, results, fields) => {
// //     if (error) {
// //       throw error;
// //     }
// //     console.log('Successfully added worker role');
// //   })
// };

const getAllIngredients = async () => {
  const connection = await getConnection();
  // return connection.execute(
  //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id order by e.id"
  // );
  return connection.execute(
    "select * from display_ingredient_view;"
  )
};

const getAllServices = async () => {
  const connection = await getConnection();
  // return connection.execute(
  //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id order by e.id"
  // );
  return connection.execute(
    "select * from display_service_view;"
  )
};

const getAllOwners = async () => {
  const connection = await getConnection();
  // return connection.execute(
  //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id order by e.id"
  // );
  return connection.execute(
    "select * from display_owner_view;"
  )
};

const getAllEmployees = async () => {
  const connection = await getConnection();
  // return connection.execute(
  //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id order by e.id"
  // );
  return connection.execute(
    "select * from display_employee_view;"
  )
};

const getAllWorkers = async () => {
  const connection = await getConnection();
  // return connection.execute(
  //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id order by e.id"
  // );
  return connection.execute(
    "select * from workers;"
  )
};

const getAllPilots = async () => {
  const connection = await getConnection();
  // return connection.execute(
  //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id order by e.id"
  // );
  return connection.execute(
    "select * from display_pilot_view;"
  )
};

const getAllLocations = async () => {
  const connection = await getConnection();
  // return connection.execute(
  //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id order by e.id"
  // );
  return connection.execute(
    "select * from display_location_view;"
  )
};
const getAllDrones = async () => {
  const connection = await getConnection();
  // return connection.execute(
  //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id order by e.id"
  // );
  return connection.execute(
    "select * from drones;"
  )
};

// const getEmployee = async (id) => {
//   const connection = await getConnection();
//   // return connection.execute(
//   //   "select e.id,e.name,d.name department,e.address from employee e,department d where e.department=d.id and e.id=?",
//   //   [id]
//   // );
//   return connection.execute(
//     "select * from display_service_view"
//   )
// };

// const updateAddress = async (id, address) => {
//   const connection = await getConnection();
//   return connection.execute("update employee set address=? where id=?", [
//     address,
//     id,
//   ]);
// };

const deleteIngredient = async (iname) => {
  const connection = await getConnection();
  let sql = 'CALL remove_ingredient(?)'
  return connection.execute(
    sql, ["ap_9T25E36L"], (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
    }
  )
//   ('pr_3C6A9R', 'prosciutto', 6), ('ss_2D4E6L', 'saffron', 3),
// ('hs_5E7L23M', 'truffles', 3), ('clc_4T9U25X', 'caviar', 5),
// ('ap_9T25E36L', 'foie gras', 4), ('bv_4U5L7M', 'balsamic vinegar', 4);
  // select barcode from ingredients where iname=?
  // return connection.execute("delete from employee where id=?", [id]);
};



const loadDrone = async(id, tag, barcode, packages, price) => {
  console.log("Creating Drone: " + id + ", " + tag + ", " + barcode + ", " + packages + ", " + price)
  const connection = await getConnection();
  return connection.execute('CALL load_drone(?, ?, ?, ?, ?)', [id, tag, barcode, packages, price])
}

const addDrone = async(load_drone_id, load_drone_tag, load_drone_fuel, load_drone_capacity, load_drone_sales, load_drone_flown_by) => {
  console.log(load_drone_id, load_drone_tag,
    load_drone_fuel,
    load_drone_capacity,
    load_drone_sales,
    load_drone_flown_by)
  const connection = await getConnection();
  return connection.execute('CALL add_drone(?, ?, ?, ?, ?, ?)', [load_drone_id,
    load_drone_tag,
    load_drone_fuel,
    load_drone_capacity,
    load_drone_sales,
    load_drone_flown_by])
}




const addRestaurant = async(rest_name, rest_rating, rest_spent, rest_location) => {
  // console.log("Creating Drone: " + id + ", " + tag + ", " + barcode + ", " + packages + ", " + price)
  const connection = await getConnection();
  return connection.execute('CALL add_restaurant(?, ?, ?, ?)', [rest_name, parseInt(rest_rating), parseInt(rest_spent), rest_location])
}

const addOwner = async(username, fname, lname, address, bdate) => {
  const connection = await getConnection();
  return connection.execute('CALL add_owner(?, ?, ?, ?, ?)', [username, fname, lname, address, bdate])
}

const addEmployee = async(username, fname, lname, address, bdate, taxID, hired, experience, salary) => {
  const connection = await getConnection();
  return connection.execute('CALL add_employee(?, ?, ?, ?, ?, ?, ?, ?, ?)', [username, fname, lname, address, bdate, taxID, hired, experience, salary])
}

const hireEmployee = async(username, id) => {
  const connection = await getConnection();
  return connection.execute('CALL hire_employee(?, ?)', [username, id])
}


const addDeliveryService = async(service_id, service_name, service_home_base, service_manager) => {
  const connection = await getConnection();
  return connection.execute('CALL add_service(?, ?, ?, ?)', [service_id, service_name, service_home_base, service_manager])
}

const addPilot = async(pilot_username, pilot_licenseID, pilot_experience) => {
  const connection = await getConnection();
  return connection.execute('CALL add_pilot_role(?, ?, ?)', [pilot_username, pilot_licenseID, pilot_experience])
}

const manageService = async(manage_service_username, manage_service_ID) => {
  const connection = await getConnection();
  return connection.execute('CALL manage_service(?, ?)', [manage_service_username, manage_service_ID])
}

const removePilot = async(remove_pilot_username) => {
  const connection = await getConnection();
  return connection.execute('CALL remove_pilot_role(?)', [remove_pilot_username])
}

const removeIngredient = async(remove_ing_barcode) => {
  const connection = await getConnection();
  return connection.execute('CALL remove_ingredient(?)', [remove_ing_barcode])
}

const removeDrone = async(remove_drone_id, remove_drone_tag) => {
  const connection = await getConnection();
  return connection.execute('CALL remove_drone(?, ?)', [remove_drone_id, remove_drone_tag])
}

const addWorker = async(worker_username) => {
  const connection = await getConnection();
  console.log(worker_username)
  return connection.execute('CALL add_worker_role(?)', [worker_username])
}

const addStartFunding = async(start_funding_owner,
  start_funding_long_name) => {
  const connection = await getConnection();
  console.log(start_funding_owner,
    start_funding_long_name)
  return connection.execute('CALL start_funding(?, ?)', [start_funding_owner,
    start_funding_long_name])
}

const addLocation = async(location_label, location_x, location_y, location_space) => {
  const connection = await getConnection();
  console.log(location_label, location_x, location_y, location_space)
  return connection.execute('CALL add_location(?, ?, ?, ?)', [location_label, location_x, location_y, location_space])
}


const addIngredient = async(ingredient_barcode,
  ingredient_iname,
  ingredient_weight) => {
  const connection = await getConnection();
  console.log(ingredient_barcode,
    ingredient_iname,
    ingredient_weight)
  return connection.execute('CALL add_ingredient(?, ?, ?)', [ingredient_barcode,
  ingredient_iname,
  parseInt(ingredient_weight)])
}

const addHireEmployee = async( hire_employee_username,
  hire_employee_id) => {
  const connection = await getConnection();
  console.log( hire_employee_username,
    hire_employee_id)
  return connection.execute('CALL hire_employee(?, ?)', [ hire_employee_username,
    hire_employee_id])
}

const addPurchaseIngredient = async( purchase_ing_long_name,
  purchase_ing_id,
  purchase_ing_tag,
  purchase_ing_barcode,
  purchase_ing_quantity) => {
  const connection = await getConnection();
  console.log(purchase_ing_long_name)
  return connection.execute('CALL purchase_ingredient(?, ?, ?, ?, ?)', [ purchase_ing_long_name,
    purchase_ing_id,
    parseInt(purchase_ing_tag),
    purchase_ing_barcode,
    parseInt(purchase_ing_quantity)])
}

const addRefuelDrone = async(refuel_drone_id,
  refuel_drone_tag,
  refuel_drone_more_fuel) => {
  const connection = await getConnection();
  console.log(refuel_drone_id,
    refuel_drone_tag,
    refuel_drone_more_fuel)
  return connection.execute('CALL refuel_drone(?, ?, ?)', [refuel_drone_id,refuel_drone_tag,refuel_drone_more_fuel])
}

const addTakeoverDrone = async(takeover_drone_username,
  takeover_drone_ID,
  takeover_drone_tag) => {
  const connection = await getConnection();
  console.log(takeover_drone_username,
    takeover_drone_ID,
    takeover_drone_tag)
  return connection.execute('CALL takeover_drone(?, ?, ?)', [takeover_drone_username, takeover_drone_ID, takeover_drone_tag])
}


const addFireEmployee = async(fire_employee_username,
  fire_employee_id) => {
  const connection = await getConnection();
  console.log(fire_employee_username,
    fire_employee_id)
  return connection.execute('CALL fire_employee(?, ?)', [fire_employee_username,
    fire_employee_id])
}

const addJoinSwarm = async(join_swarm_id,
  join_swarm_tag,
  join_swarm_leader_tag) => {
  const connection = await getConnection();
  console.log(join_swarm_id,
    join_swarm_tag,
    join_swarm_leader_tag)
  return connection.execute('CALL join_swarm(?, ?, ?)', [join_swarm_id,
    join_swarm_tag,
    join_swarm_leader_tag])
}

const addLeaveSwarm = async(leave_swarm_id,
  leave_swarm_tag) => {
  const connection = await getConnection();
  console.log(leave_swarm_id,
    leave_swarm_tag)
  return connection.execute('CALL leave_swarm(?, ?)', [leave_swarm_id,
    leave_swarm_tag])
}

const addFlyDrone = async(fly_drone_id,
  fly_drone_tag,
  fly_drone_destination) => {
  const connection = await getConnection();
  console.log(fly_drone_id,
    fly_drone_tag,
    fly_drone_destination)
  return connection.execute('CALL fly_drone(?, ?, ?)', [fly_drone_id,
    fly_drone_tag,
    fly_drone_destination])
}



// const loadDrone = async(load_drone_id, load_drone_tag, load_drone_barcode, load_drone_more_packages, load_drone_price) => {
//   const connection = await getConnection();
//   return connection.execute('CALL remove_pilot_role(?, )', [remove_pilot_username])
// }



// const getAllDepartments = async () => {
//   const connection = await getConnection();
//   return connection.execute("select id,name from department");
// };

module.exports = {
  // addEmployee,
  // getAllEmployees,
  // getEmployee,
  // updateAddress,
  // deleteEmployee,
  // getAllDepartments,
  getAllIngredients,
  getAllServices,
  addPilot,
  // deleteIngredient,
  loadDrone,
  addEmployee,
  hireEmployee,
  addOwner,
  addDeliveryService,
  deleteIngredient,
  manageService,
  getAllOwners,
  getAllEmployees,
  getAllPilots,
  getAllLocations,
  removePilot,
  addRestaurant,
  addWorker,
  getAllWorkers,
  removeIngredient,
  getAllDrones,
  removeDrone,
  addLocation,
  addIngredient,
  addHireEmployee,
  addStartFunding,
  addPurchaseIngredient,
  addTakeoverDrone,
  addRefuelDrone,
  addFireEmployee,
  addJoinSwarm,
  addLeaveSwarm,
  addFlyDrone,
  addDrone
};
