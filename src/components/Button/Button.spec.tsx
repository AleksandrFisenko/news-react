import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe('Button', () => {
  it('should be render buttin', () => {
    render(
      <Button>АВЕ НЛМК</Button>
    );

    const button = screen.queryByRole('button', { name: 'АВЕ НЛМК' });
    expect(button).toBeInTheDocument();
    expect(button).toMatchSnapshot();
  });

  it('should be call onClick', async () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick}>АВЕ НЛМК</Button>
    );

    const button = screen.getByRole('button', { name: 'АВЕ НЛМК' });
    
    await userEvent.click(button);

    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('should be render buttin', () => {
    render(
      <Button>АВЕ НЛМК</Button>
    );

    const button = screen.queryByRole('button', { name: 'АВЕ НЛМК' });
    expect(button).toBeInTheDocument();
  });

  it ('should be render a disabled button', () => {
    render(
      <Button disabled>АВЕ НЛМК</Button>
    );

    const button = screen.queryByRole('button', { name: 'АВЕ НЛМК' });
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("disabled");
  })

  it ('should not call onClick when disabled', async () => {
    const handleClick = vi.fn();
    render(
      <Button disabled onClick={handleClick}>АВЕ НЛМК</Button>
    );

    const button = screen.getByRole('button', { name: 'АВЕ НЛМК' });
    
    await userEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  })
});
