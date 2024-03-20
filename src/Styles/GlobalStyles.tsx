import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

	@font-face {
    font-family: 'SUITE-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
	@font-face {
    font-family: 'SUITE-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2304-2@1.0/SUITE-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
}

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
		font-family: 'SUITE-Regular','Noto Sans KR', sans-serif;
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
