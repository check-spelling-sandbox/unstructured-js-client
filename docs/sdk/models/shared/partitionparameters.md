# PartitionParameters


## Fields

| Field                                                                                                                                                                                                                 | Type                                                                                                                                                                                                                  | Required                                                                                                                                                                                                              | Description                                                                                                                                                                                                           | Example                                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `chunkingStrategy`                                                                                                                                                                                                    | *string*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | Use one of the supported strategies to chunk the returned elements. Currently supports: by_title                                                                                                                      | by_title                                                                                                                                                                                                              |
| `combineUnderNChars`                                                                                                                                                                                                  | *number*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | If chunking strategy is set, combine elements until a section reaches a length of n chars. Default: 500                                                                                                               | 500                                                                                                                                                                                                                   |
| `coordinates`                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                    | If true, return coordinates for each element. Default: false                                                                                                                                                          |                                                                                                                                                                                                                       |
| `encoding`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | The encoding method used to decode the text input. Default: utf-8                                                                                                                                                     | utf-8                                                                                                                                                                                                                 |
| `extractImageBlockTypes`                                                                                                                                                                                              | *string*[]                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                    | The types of elements to extract, for use in extracting image blocks as base64 encoded data stored in metadata fields                                                                                                 | ["image","table"]                                                                                                                                                                                                     |
| `files`                                                                                                                                                                                                               | [shared.Files](../../../sdk/models/shared/files.md)                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                    | The file to extract                                                                                                                                                                                                   |                                                                                                                                                                                                                       |
| `gzUncompressedContentType`                                                                                                                                                                                           | *string*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | If file is gzipped, use this content type after unzipping                                                                                                                                                             | application/pdf                                                                                                                                                                                                       |
| `hiResModelName`                                                                                                                                                                                                      | *string*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | The name of the inference model used when strategy is hi_res                                                                                                                                                          | yolox                                                                                                                                                                                                                 |
| `includePageBreaks`                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                    | If True, the output will include page breaks if the filetype supports it. Default: false                                                                                                                              |                                                                                                                                                                                                                       |
| `languages`                                                                                                                                                                                                           | *string*[]                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                    | The languages present in the document, for use in partitioning and/or OCR                                                                                                                                             | [eng]                                                                                                                                                                                                                 |
| `maxCharacters`                                                                                                                                                                                                       | *number*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | If chunking strategy is set, cut off new sections after reaching a length of n chars (hard max). Default: 1500                                                                                                        | 1500                                                                                                                                                                                                                  |
| `multipageSections`                                                                                                                                                                                                   | *boolean*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                    | If chunking strategy is set, determines if sections can span multiple sections. Default: true                                                                                                                         |                                                                                                                                                                                                                       |
| `newAfterNChars`                                                                                                                                                                                                      | *number*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | If chunking strategy is set, cut off new sections after reaching a length of n chars (soft max). Default: 1500                                                                                                        | 1500                                                                                                                                                                                                                  |
| `outputFormat`                                                                                                                                                                                                        | *string*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | The format of the response. Supported formats are application/json and text/csv. Default: application/json.                                                                                                           | application/json                                                                                                                                                                                                      |
| `pdfInferTableStructure`                                                                                                                                                                                              | *boolean*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                    | If True and strategy=hi_res, any Table Elements extracted from a PDF will include an additional metadata field, 'text_as_html', where the value (string) is a just a transformation of the data into an HTML <table>. |                                                                                                                                                                                                                       |
| `skipInferTableTypes`                                                                                                                                                                                                 | *string*[]                                                                                                                                                                                                            | :heavy_minus_sign:                                                                                                                                                                                                    | The document types that you want to skip table extraction with. Default: ['pdf', 'jpg', 'png']                                                                                                                        |                                                                                                                                                                                                                       |
| `strategy`                                                                                                                                                                                                            | *string*                                                                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                                                                    | The strategy to use for partitioning PDF/image. Options are fast, hi_res, auto. Default: auto                                                                                                                         | hi_res                                                                                                                                                                                                                |
| `xmlKeepTags`                                                                                                                                                                                                         | *boolean*                                                                                                                                                                                                             | :heavy_minus_sign:                                                                                                                                                                                                    | If True, will retain the XML tags in the output. Otherwise it will simply extract the text from within the tags. Only applies to partition_xml.                                                                       |                                                                                                                                                                                                                       |