let board = document.querySelector(".board");

function renderBoard(board) {
    for(let i = 0; i < 9; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        
        for(let j = 0; j < 9; j++) {
            let cube = document.createElement("input");
            cube.type = "text";
            cube.classList.add("cube");
            cube.minLength = 1;
            cube.maxLength = 1;
            cube.value = (j + 1);
            square.appendChild(cube);
            
        }
        board.appendChild(square);
    }

    let square_all = document.querySelectorAll(".square");
    let cubes = document.querySelectorAll('.cube');
    square_all.forEach((square_only, i) => {
        let cubes = square_only.querySelectorAll('.cube');
        cubes.forEach((cube, j) => {
            if(i == 0 || i == 1 || i == 2 || i == 3 || i == 4 || i == 5) {
                if(j == 6 || j == 7 || j == 8) {
                    cube.style.borderBottom = "1px solid rgb(34, 139, 199)"
                }
            }
            
            if( i == 0 || i == 1 || i == 3 || i == 4 || i == 6 || i == 7) {
                if(j == 2 || j == 5 || j == 8) {
                    cube.style.borderRight = "1px solid rgb(34, 139, 199)"
                }
            }
            console.log(`Square ${i}, Cube ${j}:`, cube.value);
        });
    });
}
renderBoard(board)