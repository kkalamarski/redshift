describe.skip("Redshift types", () => {
  it("should parse types in const declaration", () => {
    const code = `
      String first_name = "Chris"
      String second_name = "Surname"

      Number age = 25

      List<String> hobbies = ["fishing", "hiking", "swimming"]
      Boolean employed = :false
    `
  })

  it("should parse types in function declaration", () => {
    const code = `
      def write_hello(String name, Number age) : String do
        String string_age = String.fromNumber(age)

        "Hello, my name is " <> name <> " and I'm " <> string_age <> " years old." 
      end


      def write_hello(name, age) do
        string_age = String.fromNumber(age)

        "Hello, my name is " <> name <> " and I'm " <> string_age <> " years old." 
      end
    `
  })
})
