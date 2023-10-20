import React from 'react'
import { DocSearch } from "@docsearch/react";
import useAlgoliaContextualFacetFilters from '@theme/hooks/useAlgoliaContextualFacetFilters';

function SearchHeader() {
  const facetFilters = useAlgoliaContextualFacetFilters();
  return (
    <DocSearch
    apiKey="7640fd8ca3b8204bd58b654f71607ab5"
    indexName="docs"
    searchParameters={{
      facetFilters
    }}
    />
  )
}

export default SearchHeader
