class Fetch {
  async getCurrent(input) {
    const myKey = "a42df7c63904861c13900df4c12bdeac";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
