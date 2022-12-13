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



const addDrone = async(id, tag, barcode, packages, price) => {
  console.log("Creating Drone: " + id + ", " + tag + ", " + barcode + ", " + packages + ", " + price)
  const connection = await getConnection();
  return connection.execute('CALL load_drone(?, ?, ?, ?, ?)', [id, tag, barcode, packages, price])
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
  addDrone,
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
  removePilot
};
