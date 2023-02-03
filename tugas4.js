const showData = () => {
    
  fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
      console.log("Data nama user")
      data.forEach((item, index) => {
      console.log(`${item.name} \n${item.email} \n${item.phone}`);
      return data;
  });
  });
}

showData()
