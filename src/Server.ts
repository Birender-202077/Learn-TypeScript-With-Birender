// import * as Comp from './data/components/Comp1'
import { Comp1 } from '@components/Comp1'          // --------- by adding path in tsconfig file

export interface IServer {

    startServer(): void
    stopServer(): void
}

// classes can have 2 things -- 1. instances variables amnd 2. constructors
class Server implements IServer {
    public port: number;
    public address: string;
    public comp1 = new Comp1;
    // public comp1 = Comp.Comp1

    constructor(port: number, address: string) {
        this.port = port;
        this.address = address;
    }

    async startServer() {
        const data = await this.getData();
        console.log(`Server started at: ${this.address}//::${this.port}`)
    }
    stopServer(): void { }

    async getData(): Promise<string> {
        return '{}'
    }

}

//creating object 
const someServer: IServer = new Server(8080, 'localhost');
someServer.startServer();
// const serverPort = (startSomeServer as any).port;
// console.log(serverPort)