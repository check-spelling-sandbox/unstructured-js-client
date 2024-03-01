/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export class Files extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "multipart_form, content=true" })
    content: Uint8Array;

    @SpeakeasyMetadata({ data: "multipart_form, name=files" })
    fileName: string;
}

export class PartitionParameters extends SpeakeasyBase {
    /**
     * Use one of the supported strategies to chunk the returned elements. Currently supports: by_title
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=chunking_strategy" })
    chunkingStrategy?: string;

    /**
     * If chunking strategy is set, combine elements until a section reaches a length of n chars. Default: 500
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=combine_under_n_chars" })
    combineUnderNChars?: number;

    /**
     * If true, return coordinates for each element. Default: false
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=coordinates" })
    coordinates?: boolean;

    /**
     * The encoding method used to decode the text input. Default: utf-8
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=encoding" })
    encoding?: string;

    /**
     * The types of elements to extract, for use in extracting image blocks as base64 encoded data stored in metadata fields
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=extract_image_block_types" })
    extractImageBlockTypes?: string[];

    /**
     * The file to extract
     */
    @SpeakeasyMetadata({ data: "multipart_form, file=true" })
    files?: Files;

    /**
     * If file is gzipped, use this content type after unzipping
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=gz_uncompressed_content_type" })
    gzUncompressedContentType?: string;

    /**
     * The name of the inference model used when strategy is hi_res
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=hi_res_model_name" })
    hiResModelName?: string;

    /**
     * If True, the output will include page breaks if the filetype supports it. Default: false
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=include_page_breaks" })
    includePageBreaks?: boolean;

    /**
     * The languages present in the document, for use in partitioning and/or OCR
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=languages" })
    languages?: string[];

    /**
     * If chunking strategy is set, cut off new sections after reaching a length of n chars (hard max). Default: 1500
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=max_characters" })
    maxCharacters?: number;

    /**
     * If chunking strategy is set, determines if sections can span multiple sections. Default: true
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=multipage_sections" })
    multipageSections?: boolean;

    /**
     * If chunking strategy is set, cut off new sections after reaching a length of n chars (soft max). Default: 1500
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=new_after_n_chars" })
    newAfterNChars?: number;

    /**
     * The format of the response. Supported formats are application/json and text/csv. Default: application/json.
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=output_format" })
    outputFormat?: string;

    /**
     * A prefix of this many trailing characters from prior text-split chunk is applied to second and later chunks formed from oversized elements by text-splitting. Default: None
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=overlap" })
    overlap?: number;

    /**
     * When True, overlap is also applied to 'normal' chunks formed by combining whole elements. Use with caution as this can introduce noise into otherwise clean semantic units. Default: None
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=overlap_all" })
    overlapAll?: boolean;

    /**
     * If True and strategy=hi_res, any Table Elements extracted from a PDF will include an additional metadata field, 'text_as_html', where the value (string) is a just a transformation of the data into an HTML <table>.
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=pdf_infer_table_structure" })
    pdfInferTableStructure?: boolean;

    /**
     * The document types that you want to skip table extraction with. Default: ['pdf', 'jpg', 'png']
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=skip_infer_table_types" })
    skipInferTableTypes?: string[];

    /**
     * The strategy to use for partitioning PDF/image. Options are fast, hi_res, auto. Default: auto
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=strategy" })
    strategy?: string;

    /**
     * If True, will retain the XML tags in the output. Otherwise it will simply extract the text from within the tags. Only applies to partition_xml.
     */
    @SpeakeasyMetadata({ data: "multipart_form, name=xml_keep_tags" })
    xmlKeepTags?: boolean;
}
