function forecast() {
    let backlog = Number(document.getElementById("backlog").value);
    let incoming = Number(document.getElementById("incoming").value);
    let employees = Number(document.getElementById("employees").value);
    let sla = Number(document.getElementById("sla").value);

    let casesPerEmployee = 15;
    let capacity = employees * casesPerEmployee;
    let backlogChange = incoming - capacity;

    let output = document.getElementById("output");

    if (backlogChange <= 0) {
        output.innerHTML = "✅ No SLA breach expected. Backlog will reduce.";
        return;
    }

    let hours = (sla - backlog) / backlogChange;

    if (hours <= 2) {
        output.innerHTML = `🔴 High Risk: SLA breach in ${hours.toFixed(1)} hours (90%)`;
    } else if (hours <= 4) {
        output.innerHTML = `🟠 Medium Risk: SLA breach in ${hours.toFixed(1)} hours (70%)`;
    } else {
        output.innerHTML = `🟡 Low Risk: SLA breach in ${hours.toFixed(1)} hours (40%)`;
    }
}

function simulate() {
    let slider = document.getElementById("simEmployees");
    let employees = Number(slider.value);
    document.getElementById("empCount").innerText = employees;

    let incoming = Number(document.getElementById("incoming").value);
    let backlog = Number(document.getElementById("backlog").value);
    let sla = Number(document.getElementById("sla").value);

    let casesPerEmployee = 15;
    let capacity = employees * casesPerEmployee;
    let backlogChange = incoming - capacity;

    let simResult = document.getElementById("simResult");

    if (backlogChange <= 0) {
        simResult.innerHTML = "✅ With this change, SLA is safe and backlog reduces.";
    } else {
        let hours = (sla - backlog) / backlogChange;
        simResult.innerHTML = `⏱️ New SLA breach estimate: ${hours.toFixed(1)} hours`;
    }
}

