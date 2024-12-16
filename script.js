const stories = [
    {
        title: "Anekdot 3: Programmer dan Bug",
        content: "Programmer: 'Kenapa bug selalu ada di kode saya?' Kode: 'Karena kamu menciptakan aku dengan cinta dan sedikit kesalahan.'"
    },
    {
        title: "Anekdot 4: Anak Kecil dan Es Krim",
        content: "Anak kecil: 'Ibu, es krim ini enak sekali!' Ibu: 'Itu karena kamu makan punya adikmu.'"
    }
];

const button = document.getElementById("new-story");
button.addEventListener("click", () => {
    const randomStory = stories[Math.floor(Math.random() * stories.length)];
    const storyDiv = document.createElement("div");
    storyDiv.classList.add("story");
    storyDiv.innerHTML = `
        <h2>${randomStory.title}</h2>
        <p>${randomStory.content}</p>
    `;
    document.querySelector("main").appendChild(storyDiv);
});
