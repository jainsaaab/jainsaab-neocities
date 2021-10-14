const rows = 12;
const cols = 6;
const board = generate_board(rows, cols, 10);

const create_row = () => {
    const tr = document.createElement("tr");
    return tr;
}

const create_cell = (value) => {
    const td = document.createElement("td");
    td.innerText = value;
    return td;
}

const table = document.querySelector("#board-table");

for (let i = 0; i < rows; i++) {
    let tr = create_row();
    for (let j = 0; j < cols; j++) {
        tr.appendChild(create_cell(board[i][j]));
    }
    table.appendChild(tr);
}