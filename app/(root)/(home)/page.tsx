import Filters from "@/components/Filters"
import ResourceCard from "@/components/ResourceCard";
import ResourceHeader from "@/components/ResourceHeader";
import SearchForm from "@/components/SearchForm"
import { getResources } from "@/sanity/actions"

// To remove the cache and refresh the resources in every 900s (15min)
export const revalidate = 900;

interface Props {
  searchParams:{ [key: string]: string | undefined }
}

// Keeping the main page for Server side render for the Performance
const HomePage = async ({ searchParams } : Props) => {
  
  const resources = await getResources({
    query: searchParams?.query || '',
    category: searchParams?.category || '',
    page: '1'
  });

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            JSM Pro Resources
          </h1>
        </div>
        <SearchForm />
      </section>

      <Filters />

      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <ResourceHeader
            title='Resources'
            category={searchParams?.category || ''}
            query={searchParams?.query || ''}
          />

          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard 
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                />
              ))
            ) : (
              <p className="bado-regular text-white-400">
                No resources found!
              </p>
            )}
          </div>
        </section>
      )}
    </main>
  )
}

export default HomePage
