const addDog = () => {
  const API_URL = "https://dog.ceo/api/breeds/image/random";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", API_URL);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const dog = document.createElement("img");
      dog.src = JSON.parse(this.response).message;
      dog.className = "dog";
      const dogFarm = document.getElementById("dogFarm");
      dogFarm.appendChild(dog);
      dogFarm.scrollTo(0, dogFarm.scrollHeight);
      const numOfDogsElement = document.getElementById("numOfDogs");
      numOfDogsElement.innerHTML = parseInt(numOfDogsElement.innerHTML) + 1;
    }
  };
};

const removeDog = () => {
  const dogs = document.getElementsByClassName("dog");
  dogs[dogs.length - 1].remove();
  document.getElementById("numOfDogs").innerHTML = dogs.length;
};
