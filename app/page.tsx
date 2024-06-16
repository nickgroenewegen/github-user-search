import Flex from '@DS/components/layout/flex'
import SearchForm from '@app/_components/search-form'

export const Page = () => (
  <Flex>
    <div>
      <h1>GitHub user search</h1>
      <p>Query the GitHub search API to find users or organizations you&#39;re looking for.</p>
    </div>
    <SearchForm />
  </Flex>
)

export default Page
