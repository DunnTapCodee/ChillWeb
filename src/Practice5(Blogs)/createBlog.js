console.log("Practice 5: Create Blogs of Users");

const fetchBlogs = async () => {
    const res = await fetch("http://localhost:8000/blogs");
    const data = await res.json();
    console.log("blogs: ", data);

    const tbody = document.querySelector("#blogs tbody");

    if (data && data.length) {
        data.forEach((blog, index) => {
            tbody.innerHTML +=
                `
                 <tr>
                    <td>${blog.id}</td>
                    <td>${blog.title}</td>
                    <td>${blog.author}</td>
                    <td>${blog.content}</td>
                    <td>
                        <button
                            class="delete-blog"
                            data-id = "${blog.id}"
                        >
                            Xóa
                        </button>
                    </td>
                 </tr>
                `
        })
    }
}

const addNewRowToEnd = (blog) => {
    const tableBody = document.querySelector('#blogs tbody');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${blog.id}</td>
        <td>${blog.title}</td>
        <td>${blog.author}</td>
        <td>${blog.content}</td>
        <td>
            <button
                class="delete-blog"
                data-id="${blog.id}"
            >
                Xóa
            </button>
        </td>
    `;

    tableBody.appendChild(newRow);

    // gán sự kiện onClick cho row vừa tạo
    const btn = newRow.querySelector(`[data-id="${blog.id}"]`);
    btn.addEventListener("click", async () => {
        const row = btn.closest("tr");
        row.remove(); // xoá trên giao diện ngay

        const id = btn.getAttribute("data-id");
        try {
            await fetch(`http://localhost:8000/blogs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            });
        } catch (err) {
            console.error("Xoá thất bại:", err);
            // Nếu muốn, có thể restore row lại
        }
    });

};


const addNewBlog = () => {
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const content = document.getElementById("content");

    const saveBlog = document.getElementById("saveBlog");

    saveBlog.addEventListener("click", async () => {
        //call api to create a new blog

        const rawResponse = await fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: title.value,
                author: author.value,
                content: content.value
            })
        });

        const data = await rawResponse.json();
        addNewRowToEnd(data);

        console.log("phan hoi api:", data);

    })
}

const handleDeleteBtns = () => {
    const btns = document.querySelectorAll(".delete-blog");
    if (btns) {
        btns.forEach((btn, index) => {
            btn.addEventListener("click", async () => {
                const row = btn.closest("tr");
                row.remove(); // xoá trên giao diện ngay

                const id = btn.getAttribute("data-id");
                try {
                    await fetch(`http://localhost:8000/blogs/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                    });
                } catch (err) {
                    console.error("Xoá thất bại:", err);
                    // Nếu muốn, có thể restore row lại
                }
            });

        })
    }
}


fetchBlogs().then(() => {
    handleDeleteBtns();
});
addNewBlog();