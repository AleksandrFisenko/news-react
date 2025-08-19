import { beforeEach, describe, expect, it, vi } from "vitest";
import { useAppDispatch, useAppSelector } from "../../hooks/typedHooks";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { MODAL_TYPE_LOGIN, MODAL_TYPE_REGISTRATION } from "../../redux/actions/constants";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

vi.mock('../../hooks/typedHooks.ts', () => ({
  useAppDispatch: vi.fn(),
  useAppSelector: vi.fn(),
}));

describe('AuthModal', () => {
  let mockDispatch: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.resetAllMocks();

    mockDispatch = vi.fn();
    vi.mocked(useAppDispatch).mockReturnValue(mockDispatch);
    vi.mocked(useAppSelector).mockImplementation((selector: any) => selector({ auth: { userData: null } }));
  });

  it('should open login modal', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
  );
    const signInButton = screen.getByRole('button', { name: /sign in/i });
    expect(signInButton).toBeInTheDocument();
    await userEvent.click(signInButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: "MODAL_OPEN", payload: { modalType: MODAL_TYPE_LOGIN } });
  });

  it('should open register modal', async () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
  );
    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    expect(signUpButton).toBeInTheDocument();
    await userEvent.click(signUpButton);
    expect(mockDispatch).toHaveBeenCalledWith({ type: "MODAL_OPEN", payload: { modalType: MODAL_TYPE_REGISTRATION } });
  });
});
