
const btn=document.querySelector("button");
const post=document.querySelector(".post");
const widget=document.querySelector(".star-widget");
btn.onclick = ()=>{
    widget.style.display="none";
    post.style.display="block";                     
    return false;
}

    function toggleChat() {
        const box = document.getElementById("chatbox");
        box.style.display = box.style.display === "none" || box.style.display === "" ? "flex" : "none";
    }

    function addMessage(content, sender) {
        const chat = document.getElementById("chat-messages");
        const msg = document.createElement("div");
        msg.className = `message ${sender}`;
        msg.textContent = content;
        chat.appendChild(msg);
        chat.scrollTop = chat.scrollHeight;
    }

    async function handleKey(event) {
        if (event.key === "Enter") {
            const input = document.getElementById("user-input");
            const userMessage = input.value.trim();
            if (userMessage === "") return;
            addMessage(userMessage, "user");
            input.value = "";
            const botReply = "How can I help you?"; // Always send this reply
            addMessage(botReply, "bot");
        }
    }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

