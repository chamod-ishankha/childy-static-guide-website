import React from 'react'

function TechnologyUsed() {

    const technologies = [
        {
            name: 'Python',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/python.png'
        },
        {
            name: 'Fast API',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_3MFhCzXcwI3GWIDTsWJg2HXDTG7TwGovA&s'
        },
        {
            name: 'Android (Java)',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStIJlobBNZqySgPmDeAWXYctcqbYSMQmEVmWZv4AaMAUyf9MKRxuEtnRfP9c-aDx6hAZs&usqp=CAU'
        },
        {
            name: 'Spring Boot Java',
            image: 'https://img.icons8.com/?size=512&id=90519&format=png'
        },
        {
            name: 'Java 17',
            image: 'https://cdn-icons-png.flaticon.com/512/226/226777.png'
        },
        {
            name: 'IntelliJ Idea',
            image: 'https://seeklogo.com/images/J/jetbrains-intellij-idea-logo-CA1D5DC51F-seeklogo.com.png'
        },
        {
            name: 'Arduino',
            image: 'https://i0.wp.com/assets.stickpng.com/images/62b1ee2f8309c32ce1623dab.png?ssl=1'
        },
        {
            name: 'Tensorflow',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/tensorflow.png'
        },
        {
            name: 'Keras',
            image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEXQAAD////NAAD13Nz87+/wwMD12dnKAADuuLjXRUX9+Pjrra3XQkLvu7vWPz/vvr7ppKTcZGTbXl7aWFjZUlLYS0vonZ3mlpb55OTfdHTebW3xxsb00NDdZ2fts7Pmk5PTISHjhobhfHzSHBzVMTHRDw/VNTXfcHDUKip+QHsdAAAFFElEQVR4nO3da1fbMAwG4NilKQQYjDuU+4Dx/3/hekrHSmOJ1NbFyvR+pRg9JzmQRIppwtjTaBfAnv9D2LWTcabtVsJ2FseZWbsSTmIzzsSJC63HhfbjQvtxof240H5caD8utB8X2o8L7ceF9uNC+3Gh/bjQflxoPy60Hxfajwvtx4X240L7caH9kAm/DiKRLVS4WEMoPJyuZTd7sXgzn25kflpUGJFwucxa2szV4nVisJCgtGJhvN2sap61XPydAIbwo6A0GmGc9qs6ylgv3iSBWWv9W5RAGPdTZR1vvSBwBBdRF+6kqtp6QegILnJRcoJVI0SAoRuDEAMuKsxPLcJ4hwGn9o8hDsz70/N36SqEjMA6hHynaFOHkBVYg5AXWIEw/sSARRdsH+trC7mB6kJ2oLYwnmDAQ4onK7pCAaCuUAKoKsSB+c96Nn6KnlAGqCgUAuoJ4ykGvKd7Pq0lFANqCfFTlBKoJJQ7gkpCSaCKUBSoIYxnGHCfussnLxQGygulgeJCcaC0UB4oLFQAygpx4PbtuGHVCQrjuQJQUqgDFBQqAeWEWkAxoRpQSogDS9r031cnIox7akAZoSZQRKgKlBDqAgWEOPCSG8gvjAe6QHahOpBbqA9kFsYf6kBeIQ58EAGyCnHg1YyQgVXHKESBITxZP4btIw4M4Z3QgVTHJtzpvhNeGf9NMyDsV2zL6jSF4Y1QAlanKtwxfU0zKDwPgb9WpysMZ4QWoDplYcl7BgOrUxaSjB/i1WkLw53ZpxiDQ6hJVqcvvLX6rG14no0+L90ivwhB/erEhBP41a3cd2qHVSclXNwQH4Ff5LzdlxIuDxN8P/VCJ+pVJyP8+H0JDyQy3irKCFev9sRd8BMWe8Br+RxpjvB5ek7jSVQnIFy7RYLHTdhuFQWE6ydgvAc/Rj11+fkj2YVfn2wjnz0pxqSr4xZuPhWFG/pdIQWqjlnYu+ZMb8CwTNn7vmB1vMLrxHDbVp8uD68weXeL9IRf8yFwdZzC0/QQ7TEo5LhV5BSeQZPe8HnK0K1hFO6BKyJNqcfsKsDq+HpP8ILxAhTSX4IrvRV0BRLJuzVKb3a9gMKyTaFS1Sm9u3YJCqkvwdXeP5ykvmcZ4m6N2juk76AwlO1A16tO7S3ZB1BI261RfNMZPk9JuzWKb6sjsxo3hETN9/GfYGJ2LYkfo7mnQgsKCS/BVffFeIUPIl23Rnfnj2eYSNatUd69pbcr6FbfPqw63R14kPOUqlujvcdQas/ZVYgGptT3iZqDQqJLcG1h08AHkaZboy6EN54l6taoC9nPU30hdp5S7DRUgxDZN5GgW1ODEBlhIOjW1CDERhjKuzV1CJE9lYq7NXUIkRGG4m5NHUJshKF0YKoSYYNsrFTYralFiIwwFL5bU4sQa7mVdWuqESKjNmXdmnqEyAhDOMiurSYhdp6WXIJXJMRGGAq6NTUJkRGGgm5NTULsPM2/BK9KiI0wZO8+X5cQGWEI17nVVSXERhhyN7+uTNi8gcLH3Oo05mmwtaARhuwBW5L/2ZXc/X8vsyDgPM2+TaT5r2QJ4kHueukRhvw/+UT/Wa73GCIbCIwwFNRGIuwdxXxgujVccHdBJNxcVfG7e6uxCGuKC+3HhfbjQvtxof240H5caD8utB8X2o8L7ceF9uNC+3Gh/bjQflxoPy60Hxfajwvtx4X240L7caH9uNB+PoXtLI4zs3Yl7NrJONN2K+G440L7+QPK4U+zmdKNJQAAAABJRU5ErkJggg=='
        },
        {
            name: 'MySQL',
            image: 'https://brandlogo.org/wp-content/uploads/2024/02/MySQL-Logo-300x300.png.webp'
        },
        {
            name: 'Git Lab',
            image: 'data:image/png;base64,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'
        },
        {
            name: 'JWT',
            image: 'https://samitha-vidhanaarachchi.github.io/Research-Website/Images/tech/jwt.png'
        },
        {
            name: 'GitHub',
            image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
        },
        {
            name: 'Figma',
            image: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
        },
        {
            name: 'CNN',
            image: 'https://media.licdn.com/dms/image/D5612AQElKn2koPJAyA/article-cover_image-shrink_720_1280/0/1712413894338?e=2147483647&v=beta&t=8uC833WqJZ0odouvh0I1rfKf3nMrqndUoOMjNEuwJzA'
        },
    ]

    return (
        <section className='mt-5' id='Technologies'>
            <h1 style={{ textAlign: 'center' }}>Technologies Used</h1>

            <div className=" mt-5" style={{ marginLeft: '10%', marginRight: '10%' }}>
                <div className="row row-cols-md-12">
                    {technologies.map((technology) => (
                        <div className="col-xs-12 col-sm-2">
                            <div className="card d-flex flex-column h-100 mb-4" style={{ border: "0", marginLeft: '25%' }}>
                                <a className="img-card">
                                    <img src={technology?.image} alt='' style={{ padding: '30px', width: '100%', borderRadius: '50%', boxShadow: '1px 1px 10px 1px #D4D4D4' }} />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3 mt-3" style={{ fontSize: '16px' }}> {technology?.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default TechnologyUsed