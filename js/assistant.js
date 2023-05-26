function openForm() {
	document.getElementById("chatForm").style.display = "block";
  }
  
function closeForm() {
document.getElementById("chatForm").style.display = "none";
} 


function sendMessage() {
	responseBox = document.getElementById("responseArea")
	userMessage = document.getElementById("userMessage")

	responseBox.scrollTop = responseBox.scrollHeight;
	const adviceRequest = new Request(`https://api.adviceslip.com/advice`);
	fetch(adviceRequest)
	.then((response) => response.json())
    .then((data) => {
		obj = data;
	})
	.then(() => {
		responseBox.innerHTML += "You: " + userMessage.value + "<br>" +
		 "Response: " + (obj.slip.advice) + "<br><br>";
		responseBox.scrollTop = responseBox.scrollHeight;
		userMessage.value = ""
	});
}