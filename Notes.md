# Resolver
- A function that is responsible for populating the data for a single field in your schema

# Resolver map
- A big object that holds all of those Type --> Field --> Resolver functions

# Field level Directives
1. @include(if: Boolean!) - Call the resolver for the annotated field if the boolean is true
2. @skip(if: Boolean!) - If boolean is true skip annotated field
3. @deprecated(reason: String) - Mark a field as deprecated with a reason for it future removal
