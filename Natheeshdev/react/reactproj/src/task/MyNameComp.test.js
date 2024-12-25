import { render,screen } from "@testing-library/react";
import MyNameComp from "./MyNameComp";

describe("Myname Component",()=>{

    test(" render it",()=>{
        render(<MyNameComp/>);
        let createElement=screen.getByText("my name is Natheesh");
        expect(createElement).toBeInTheDocument();
    })
    
    
    test(" render it with  props name",()=>{
        render(<MyNameComp name="Natheesh" post="Fullstack developer"/>);
        let createElement=screen.getByText("My Name is :Natheesh");
        expect(createElement).toBeInTheDocument();
    })
    
    
    test(" render it with props post",()=>{
        render(<MyNameComp name="Natheesh" post="Fullstack developer"/>);
        let createElement=screen.getByText(/i am :Fullstack developer/i);
        expect(createElement).toBeInTheDocument();
    })
    
})
