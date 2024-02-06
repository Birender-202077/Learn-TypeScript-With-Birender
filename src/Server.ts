interface IServer {

    startServer(): void
    stopServer(): void
}

// classes can have 2 things -- 1. instances variables amnd 2. constructors
class Server implements IServer {
    public port: number;
    public address: string;

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    startServer() {
        console.log(`Server started at: ${this.address}//::${this.port}`)
    }
    stopServer(): void { }
}

//creating object 
const someServer: IServer = new Server(8080, 'localhost');
someServer.startServer();
// const serverPort = (startSomeServer as any).port;
// console.log(serverPort)