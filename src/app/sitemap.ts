import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://intern-fe-bcc-2025.vercel.app/",
			lastModified: new Date(),
			priority: 0.5,
			changeFrequency: "never",
		},
	];
}
