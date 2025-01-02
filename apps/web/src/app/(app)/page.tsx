import { ButtonLink } from '@local/ui/ButtonLink'
import { Heading } from '@local/ui/Heading'
import { Jumbotron } from '@local/ui/Jumbotron'
import { Text } from '@local/ui/Text'

const HomePage = () => {
  return (
    <main>
      <Jumbotron
        alignment="center"
        background="secondaryLight"
        body={<Text>This is where you get started</Text>}
        buttons={<ButtonLink href="/about">Learn more</ButtonLink>}
        heading={<Heading>Welcome!</Heading>}
      />
    </main>
  )
}

export default HomePage
