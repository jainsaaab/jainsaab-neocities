const $ = (...args) => document.querySelector(...args);

const create_row = () => {
    const tr = document.createElement("tr");
    return tr;
}

const create_cell = (value) => {
    const td = document.createElement("td");
    td.innerText = value;
    return td;
}

const generate_and_display_board = () => {
    const table = $("#board_table");
    table.innerHTML = "";

    const rows = $('#rows').value;
    const cols = $('#cols').value;
    const mines = $('#mines').value;

    const board = generate_board(rows, cols, mines);
    for (let i = 0; i < rows; i++) {
        let tr = create_row();
        for (let j = 0; j < cols; j++) {
            tr.appendChild(create_cell(board[i][j]));
        }
        table.appendChild(tr);
    }
}