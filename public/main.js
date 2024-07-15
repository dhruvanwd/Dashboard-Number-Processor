// input#num

const numInput = document.querySelector("#num");

numInput.addEventListener("change", (e) => {
  const num = parseInt(e.target.value);
  console.log(num);
});

// add click listner to the button

const addButton = document.querySelector("button#add");

addButton.addEventListener("click", () => {
  const num = parseInt(numInput.value);

  if (!isNaN(num) && num > 0) {
    console.log("Adding:", num);
    addNumbers(num);
    numInput.value = "";
  } else {
    alert("Please enter a positive integer.");
  }
});

// write post api /add-numbers to send the numbers to the server

async function addNumbers(numbers) {
  try {
    const response = await fetch("/add-numbers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        num: numbers,
      }),
    });
    const result = await response.json();
    console.log("Result:", result);
    alert(result?.message);
    numInput.value = "";
    return result;
  } catch (error) {
    console.error("Error:", error);
    alert("Error adding numbers to the server.");
    return null;
  }
}
