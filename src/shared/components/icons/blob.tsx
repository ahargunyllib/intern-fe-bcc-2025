import type { SVGProps } from "react";

export function Blob(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={812}
			height={1024}
			fill="none"
			{...props}
		>
			<title>Blob</title>
			<path
				fill="#5A81FA"
				d="M575.458 251.664c21.267 181.562 43.708 239.876 140.755 365.735 144.063 186.889 144.716 465.691-130.854 545.421-211.943 61.3-474.901 2.19-595.463-133.86C-213.13 799.868-249.43 375.869-92.8 112.687 42.212-114.207 301.957-187.118 471.232-45.642c57.413 47.984 83.861 123.406 104.226 297.306Z"
			/>
		</svg>
	);
}
