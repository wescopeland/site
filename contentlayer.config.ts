import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypeSlug from "rehype-slug";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (document) => document._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};

const Blog = defineDocumentType(() => ({
  computedFields,

  name: "Blog",
  filePathPattern: "blog/*.mdx",
  bodyType: "mdx",
  fields: {}
}));

const TIL = defineDocumentType(() => ({
  computedFields,

  name: "TIL",
  filePathPattern: "til/*.mdx",
  bodyType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedAt: { type: "string", required: true }
  }
}));

const contentLayerConfig = makeSource({
  contentDirPath: "src/data",
  documentTypes: [Blog, TIL],
  mdx: {
    rehypePlugins: [rehypeSlug]
  }
});

export default contentLayerConfig;
