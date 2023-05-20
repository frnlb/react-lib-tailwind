export interface ContentfulElement {
  id?: string;
  internalName?: string;
}

export interface ContentfulPage extends ContentfulElement {
  metaDescription?: string;
  metaTitle?: string;
  slug: string;
  title: string;
}

export interface Cta extends ContentfulElement {
  label?: string;
  link?: string;
  page?: ContentfulPage;
}
