import { render, screen } from "@testing-library/react";
import EntryForm from "../components/EntryForm";

test("Test Checkbox",()=>{
    render(<EntryForm/>);
    let checkInput = screen.getByRole("checkbox");
    expect(checkInput).toBeInTheDocument();
})
