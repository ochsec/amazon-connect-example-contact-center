package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"os"
)

func main() {
	var source, target = getArguments()

	// Check if the source argument is provided
	if source == "" {
		fmt.Println("Source argument is required")
		return
	}

	// Check if the target argument is provided
	if target == "" {
		fmt.Println("Target argument is required")
		return
	}

	// Print the source and target arguments
	fmt.Println("Source:", source)
	fmt.Println("Target:", target)
}

func getArguments() (string, string) {
	// Define flags for source and target arguments
	sourcePtr := flag.String("source", "", "Source argument")
	targetPtr := flag.String("target", "", "Target argument")

	// Parse the command line arguments
	flag.Parse()

	return *sourcePtr, *targetPtr
}

func readEnvs() (string, error) {
	file, err := os.Open("envs.json")
	if err != nil {
		return "Error opening file:", err
	}
	defer file.Close()

	// Read the file content
	content, err := io.ReadAll(file)
	if err != nil {
		return "Error reading file:", err
	}

	// Parse the JSON content into a struct
	var envs Envs
	err = json.Unmarshal(content, &envs)
	if err != nil {
		return "Error parsing JSON:", err
	}

	
}