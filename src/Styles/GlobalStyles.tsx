import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	html,body {
		scroll-behavior:smooth;
		height:100%;
	}

    body {
    box-sizing: border-box;
		font-family: 'Syncopate','Noto Sans KR', sans-serif;
		background: ${({ theme }) => theme.bgColor};
		color: ${({ theme }) => theme.textColor};
		transition: all 0.25s linear;
	}

	a {
		text-decoration:none;
		color: ${({ theme }) => theme.textColor};
	}

	li {
		list-style:none;
	}

	button {
		outline:none;
		border:none;
		color: ${({ theme }) => theme.textColor};
		background-color: transparent;
	}
`;

export default GlobalStyle;
