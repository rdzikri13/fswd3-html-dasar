function start() {
    alert("Welcome to Jankenpon Game");
    let namaPlayer = prompt("please, enter your name: ");
    console.log(`Halo ${namaPlayer}, enjoy the game`);
    console.log("====================== START ==========================");
  
    //Inisiasi pilihan player dan komputer
    alert("please choose one: Paper, Rock, Scissors");
    let player = prompt("please choose one: Paper, Rock, Scissors");
  
    //mengubah inputan player menjadi huruf kecil
    player = player.toLowerCase();
  
    let computer = Math.random();
    if (computer < 0.34) {
      computer = "Scissors";
    } else if (computer >= 0.34 && computer < 0.67) {
      computer = "Rock";
    } else {
      computer = "Paper";
    }
  
    //Membuat logika permainan
    let hasil = "";
    let score = 0;
    if (player == computer) {
      hasil = "Draw";
      score;
    } else if (player == "Scissors") {
      hasil = computer == "Rock" ? `${namaPlayer} Lose!` : "computer win!";
      score--;
    } else if (player == "Rock") {
      hasil = computer == "Scissors" ? `${namaPlayer} Win!` : "computer lose!";
      score++;
    } else if (player == "Paper") {
      hasil = computer == "Scissors" ? `${namaPlayer} Lose!` : "computer win!";
      score--;
    } else {
      hasil = "Wrong Choice";
    }
  
    //Menampilkan hasil permainan
    console.log(
      `${namaPlayer} memilih: ${player} dan komputer memilih: ${computer} `
    );
    console.log("================================================");
  
    //Menampilkan score
    console.log(`Hasil: ${hasil}, dan scorenya adalah ${score}`);
    console.log("====================== END ==========================");
  
    //Membuat perulangan permainan
    confirm("want to play again?")
      ? start()
      : alert("Thanks, see you!");
  }
  
  start(); //memanggil fungsi start
  