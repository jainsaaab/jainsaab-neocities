// TODO: optimze this & convert it to rust wasm

const constants = { 'MINE': '💥' }
Object.freeze(constants);

const generate_board = (rows, cols, mines_count) => {
    if (rows * cols < mines_count) {
        throw Error("mines count count must be less then total tiles count");
    }

    const mine_idxs = new Set();
    while (mine_idxs.size != mines_count) {
        mine_idxs.add(Math.floor(Math.random() * rows * cols));
    }

    let board = []
    for (var i = 0; i < rows; i++) board[i] = [];

    for (x of mine_idxs) {
        board[Math.floor(x / cols)][x % cols] = constants.MINE;
    }


    const get_nearby_mine_count = (i, j) => {
        if (board[i][j] === constants.MINE) return constants.MINE;

        let count = 0;
        if (i != 0 && j != 0 && board[i - 1][j - 1] === constants.MINE) count++;
        if (i != 0 && board[i - 1][j] === constants.MINE) count++;
        if (i != 0 && j + 1 < cols && board[i - 1][j + 1] === constants.MINE) count++;

        if (j != 0 && board[i][j - 1] === constants.MINE) count++;
        if (j + 1 < cols && board[i][j + 1] === constants.MINE) count++;

        if (i + 1 < rows && j != 0 && board[i + 1][j - 1] === constants.MINE) count++;
        if (i + 1 < rows && board[i + 1][j] === constants.MINE) count++;
        if (i + 1 < rows && j + 1 < cols && board[i + 1][j + 1] === constants.MINE) count++;

        return 0 == count ? ' ' : count;
    }


    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            board[i][j] = get_nearby_mine_count(i, j);
        }
    }

    return board;
}