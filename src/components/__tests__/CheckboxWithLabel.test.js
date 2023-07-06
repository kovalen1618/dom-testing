import { fireEvent, render, screen } from "@testing-library/react";
import CheckboxWithLabel from "../check-box-with-label/CheckBoxWithLabel";

it('CheckboxWithLabel changes the text after click', () => {
    render(
        <CheckboxWithLabel labelOn="On" labelOff="Off" />
    );

    expect(screen.getByLabelText(/off/i)).toBeTruthy();

    fireEvent.click(screen.getByLabelText(/off/i));

    expect(screen.getByLabelText(/on/i)).toBeTruthy();
});