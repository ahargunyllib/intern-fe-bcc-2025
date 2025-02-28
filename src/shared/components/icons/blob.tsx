"use client";

export function Blob() {
	// Original path
	const path1 =
		"M575.458 251.664c21.267 181.562 43.708 239.876 140.755 365.735 144.063 186.889 144.716 465.691-130.854 545.421-211.943 61.3-474.901 2.19-595.463-133.86C-213.13 799.868-249.43 375.869-92.8 112.687 42.212-114.207 301.957-187.118 471.232-45.642c57.413 47.984 83.861 123.406 104.226 297.306Z";

	// Slightly modified versions for animation
	const path2 =
		"M591.641 13.6793C538 210.179 538 273.234 668.853 394.078C821.641 535.179 732.64 791.179 538 939.5C378.64 1060.94 995.5 1241 252.5 1220C-42.5 1194 -399 1318 -133.801 -210.313C1.21185 -437.207 260.957 -510.118 430.232 -368.642C487.645 -320.658 624.602 -107.066 591.641 13.6793Z";
	const path3 =
		"M614.5 -338.5C560.859 -142 501.647 -189.844 632.5 -69C785.288 72.1008 843.141 277.679 648.5 426C453.86 574.321 1103.64 938.68 341.5 1185C46.5005 1159 -583.841 1495.63 -318.641 -32.6791C-183.629 -259.573 241.816 -461.797 411.091 -320.321C468.504 -272.338 647.461 -459.245 614.5 -338.5Z";

	return (
		<svg width={1920} height={1080} fill="none">
			<title>Blob</title>

			<path fill="#5A81FA" d={path1}>
				<animate
					attributeName="d"
					dur="20s"
					repeatCount="indefinite"
					values={`${path1};${path2};${path3};${path2};${path1}`}
					calcMode="spline"
					keySplines="1 1 1 1; 1 1 1 1; 1 1 1 1; 1 1 1 1"
				/>
			</path>
		</svg>
	);
}
