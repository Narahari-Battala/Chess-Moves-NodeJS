# Chess-Moves-NodeJS

Chess Moves is a NodeJS application using which we can find the available positions for a given chess piece from given position. 

## Requirement ##
* [Expressjs](http://expressjs.com/zh-tw/) - API Server
* [Nodejs](https://nodejs.org/en/) - Backend Framework
* [NPM](https://www.npmjs.com/) - Package Management
* [ExpressGenerator](https://www.npmjs.com/package/express-generator) - Application Template Generator
* [Jade](http://jade-lang.com) - Node Template Engine

There are 6 Chess Pieces. 
>1. Rook  
>2. Knight. 
>3. Bishop. 
>4. Queen. 
>5. King
>6. Pawn

First User can enter a valid chess piece name and valid poistion, on submit all the positions to which the piece can be moved will be shown in drop down. From the available positions user can select a position and the piece will be moved to the selected position. Then the selected position will not available for other chess pieces.

If incorrect piece name or incorrect position is provided , then error messages will be shown to the user. User can see the game instructions if he is not sure of format of the input.






