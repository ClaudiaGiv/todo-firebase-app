<template>
  <div>
    <div class="about">
      <h1>This is an about page</h1>
    </div>
    <vue-blob-json-csv
        @success="handleSuccess"
        @error="handleError"
        file-type="csv"
        file-name="sample"
        :data="array"
    >download
    </vue-blob-json-csv>
  </div>
</template>

<script>

export default {
  name: "AboutView",
  data() {
    return {
      array: [{name: "Ana", age: 23}, {name: "Adi", age: 33}, {name: "Andra", age: 28}]
    }
  },
  methods: {
    handleSuccess() {
      console.log("success")
    },
    handleError() {
      console.log("error")
    }
  }
}
</script>
