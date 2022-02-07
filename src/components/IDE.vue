<template>
    <div class="ide">
        <div v-for="(row, i) in code" class="row" :key="i" :data-line="i+1" v-html="row">
            {{ row }}
        </div>
    </div>
</template>

<script>
export default {
    name: "IDE",
    props: {
        filename: String
    },
    data: () => ({
        code: null
    }),
    async created() {
        const res = await fetch(`/ide/${this.filename}`).then((res) => res.text())
        const codeArray = res.replaceAll("\r", "").split("\n")
        this.code = this.getColoredCode(codeArray)
    },
    methods: {
        getColoredCode(codeArray) {
            return codeArray.map(row => {
                row = this.setOrange(row)
                row = this.setPurple(row)
                row = this.setBlue(row)
                row = this.setYellow(row)
                row = this.setGreen(row)
                return row
            })
        },
        setOrange(row) {
            let newRow = row
            const keywords = ["class", "this", "return", "new", "constructor", "enum", "number", "String"]
            for (const keyword of keywords) {
                if (newRow.includes(keyword)) {
                    newRow = newRow.replaceAll(keyword, `<span class="orange">${keyword}</span>`)
                }
            }
            return newRow
        },
        setPurple(row) {
            let newRow = row
            const keywords = ["name", "gender", "birthdayTimestamp", "residence", "imageUrl", "resumeUrl", "Male",
                "Female", "Apache_Helicopter", "latitude", "longitude", "university", "year", "job", "searchHistory", "ultimateGoal"]
            for (const keyword of keywords) {
                if (newRow.includes(keyword) && !newRow.includes("constructor") && !newRow.includes("=")) {
                    newRow = newRow.replaceAll(keyword, `<span class="purple">${keyword}</span>`)
                } else if (newRow.includes(keyword) && !newRow.includes("constructor")) {
                    newRow = newRow.replace(keyword, `<span class="purple">${keyword}</span>`)
                }
            }
            return newRow
        },
        setBlue(row) {
            let newRow = row
            const keywords = [52.37319418639191, 4.891432372896032, 922968000, 4]
            for (const keyword of keywords) {
                if (newRow.includes(keyword)) {
                    newRow = newRow.replaceAll(keyword, `<span class="blue">${keyword}</span>`)
                }
            }
            return newRow
        },
        setYellow(row) {
            let newRow = row
            const keywords = ["getStudyInformation", "getGoals", "getPreferences", "getHobbies"]
            for (const keyword of keywords) {
                if (newRow.includes(keyword)) {
                    newRow = newRow.replaceAll(keyword, `<span class="yellow">${keyword}</span>`)
                }
            }
            return newRow
        },
        setGreen(row) {
            let newRow = row
            newRow = newRow.replaceAll(' "', `<span class="green"> "`)
            newRow = newRow.replaceAll('" ', `" </span>`)
            newRow = newRow.replaceAll('["', `[<span class="green">"`)
            newRow = newRow.replaceAll('"]', `"</span>]`)
            newRow = newRow.replaceAll('",', `"</span>,`)
            return newRow
        }
    }
}
</script>

<style lang="scss">
.ide .row {
    flex-direction: row;
    flex-wrap: nowrap;
    min-height: 28px;
    white-space: break-spaces;

    &:before {
        content: attr(data-line);
        color: gray;
        display: inline-block;
        width: 32px;
    }

    .orange {
        color: #CC7832
    }
    .purple {
        color: #9876AA
    }
    .blue {
        color: #6897BB
    }
    .yellow {
        color: #FFC66D
    }
    .green {
        color: #6a8759;
    }
}
</style>