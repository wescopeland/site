import {
  ComputedFields,
  defineDocumentType,
  makeSource
} from "contentlayer/source-files";
import rehypePrism from "rehype-prism-plus";
import rehypeSlug from "rehype-slug";

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: (document) => document._raw.sourceFileName.replace(/\.mdx$/, "")
  }
};

const BlogPost = defineDocumentType(() => ({
  computedFields,

  name: "BlogPost",
  filePathPattern: "content/*.mdx",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    publishedOn: { type: "string", required: true }
  }
}));

const contentLayerConfig = makeSource({
  contentDirPath: "src/blog",
  documentTypes: [BlogPost],
  mdx: {
    rehypePlugins: [rehypeSlug, rehypePrism]
  }
});

export default contentLayerConfig;
