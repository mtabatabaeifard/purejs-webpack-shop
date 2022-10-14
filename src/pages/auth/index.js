import Box from "../../components/Box";
import TextField from "../../components/TextField";
import Button from "../../components/Button"
export default function Auth(){
    return Box({
        className:"flex flex-col",
        children: [
            TextField(),
            Button('ادامه'),
            Button('یسلا'),
        ]
    })
}