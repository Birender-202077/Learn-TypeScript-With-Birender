// classes can have 2 things -- 1. instances variables amnd 2. constructors
class Server {
    port;
    address;
    constructor(port, address) {
        this.port = port;
        this.address = address;
    }
    startServer() {
        console.log(`Server started at: ${this.address}//::${this.port}`);
    }
}
//creating object 
const startSomeServer = new Server(301, 'localhost'); // the new will call the constructor of server class.
startSomeServer.startServer();
