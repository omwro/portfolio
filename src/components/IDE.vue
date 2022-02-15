<template>
    <div class="ide">
        <div v-for="(row, i) in code" class="row" :key="i" :data-line="i+1" v-html="row">
            {{ row }}
        </div>
    </div>
</template>

<script>
import json from "@/../public/ide/cfg.json"

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
                const fileType = this.getFileType(this.filename)
                const keywords = json[fileType]
                row = this.setOrange(row, keywords.orange)
                row = this.setPurple(row, keywords.purple)
                row = this.setBlue(row)
                row = this.setYellow(row, keywords.yellow)
                row = this.setGreen(row)
                return row
            })
        },
        setOrange(row, keywords) {
            let newRow = row
            for (const keyword of keywords) {
                if (newRow.includes(keyword)) {
                    newRow = newRow.replaceAll(keyword, `<span class='orange'>${keyword}</span>`)
                }
            }
            return newRow
        },
        setPurple(row, keywords) {
            let newRow = row
            for (const keyword of keywords) {
                // TS rule
                if (newRow.includes(keyword) && !newRow.includes("constructor") && !newRow.includes("=")) {
                    newRow = newRow.replaceAll(keyword, `<span class='purple'>${keyword}</span>`)
                }
                // TS & JAVA rule
                else if (newRow.includes(keyword) && !newRow.includes("constructor") &&
                    !newRow.includes("public") && !newRow.includes("super")) {
                    newRow = newRow.replace(keyword, `<span class='purple'>${keyword}</span>`)
                }

            }
            return newRow
        },
        setBlue(row) {
            let newRow = row
            const keywords = newRow.match(/[+-]?([0-9]+\.?[0-9]*|\.[0-9]+)/g)
            if (!keywords) return newRow
            for (const keyword of keywords) {
                newRow = newRow.replace(keyword, `<span class='blue'>${keyword}</span>`)
            }
            return newRow
        },
        setYellow(row, keywords) {
            let newRow = row
            for (const keyword of keywords) {
                if (newRow.includes(keyword)) {
                    newRow = newRow.replaceAll(keyword, `<span class='yellow'>${keyword}</span>`)
                }
            }
            return newRow
        },
        setGreen(row) {
            let newRow = row
            newRow = newRow.replaceAll('("', `(<span class='green'>"`)
            newRow = newRow.replaceAll(' "', `<span class='green'> "`)
            newRow = newRow.replaceAll('" ', `" </span>`)
            newRow = newRow.replaceAll('["', `[<span class='green'>"`)
            newRow = newRow.replaceAll('"]', `"</span>]`)
            newRow = newRow.replaceAll('",', `"</span>,`)
            return newRow
        },
        getFileType(filename) {
            return filename.split(".")[1]
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