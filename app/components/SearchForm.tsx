import React from 'react'
import Form from 'next/form'
import SearchFormReset from './SearchFormReset';

const SearchForm = () => {
    const query = "test";

  return (
    <Form action="/" scroll={false} className='search-form'>
        <input
            name="query"
            defaultValue = {query}
            className="search-input"
            placeholder="Search Start Up"
        />

        <div className='flex gap-2'>
            {query && <SearchFormReset />}
            <button className='search-btn text-white' type="submit">
                S
            </button>
        </div>
    </Form>
  )
}

export default SearchForm