(() => {
    let N = 3;
    let player = 1;
  
    let rows = Array(N).fill(0);
    let cols = Array(N).fill(0);
    let anti = 0;
    let dig = 0;
    let count = 0;
  
    let winner = null;
    let player1 = [];
    let player2 = [];
  
  
    // getter
    const board = document.getElementById('board');
    const winnerText = document.getElementById('winner');
  
  
    function creatBoard(rows, cols) {
      for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        for (let j = 0; j < cols; j++) {
          const col = document.createElement('div');
          col.classList.add('col');
          col.setAttribute('r', i)
          col.setAttribute('c', j)
          row.appendChild(col);
        }
        board.appendChild(row);
      }
  
    }
    creatBoard(rows.length, cols.length)
  
    const changePayer = () => {
      player = player === 1 ? -1 : 1
    }
  
    const removeEvent = () => {
      board.style.pointerEvents = 'none';
    }
  
    const checkWinner = (r, c, currPlayer) => {
      count++;
      rows[r] += currPlayer;
      cols[c] += currPlayer;
  
      if (r + c === 2) {
        anti += currPlayer;
  
      }
  
      if (r === c) {
        dig += currPlayer;
      }
  
      if ([rows[r], cols[c], anti, dig].includes(N)) {
        winner = "Player A";
        winnerText.innerText = winner;
      } else if ([rows[r], cols[c], anti, dig].includes(-N)) {
        winner = "Player B";
        winnerText.innerText = winner;
      }
  
      if (count >= 9) {
        winner = "Draw";
        winnerText.innerText = winner;
      }
    }
  
  
  
    // events 
    board.addEventListener('click', (e) => {
      const target = e.target;
      if (!target.innerText && !winner) {
        target.innerText = (player === 1 ? 'X' : '0')
        // row 
        const r = Number(target.getAttribute('r'))
        // col
        const c = Number(target.getAttribute('c'))
        player === 1 ? player1.push([r, c]) : player2.push([r, c]);
        checkWinner(r, c, player);
        changePayer()
      }
  
    })
  
  })()
  